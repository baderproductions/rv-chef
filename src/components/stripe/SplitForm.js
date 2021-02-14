import React, { useMemo } from "react";
import {
	useStripe,
	useElements,
	CardNumberElement,
	CardCvcElement,
	CardExpiryElement,
} from "@stripe/react-stripe-js";

import useResponsiveFontSize from "../../useResponsiveFontSize";

const useOptions = () => {
	const fontSize = useResponsiveFontSize();
	const options = useMemo(
		() => ({
			style: {
				base: {
					fontSize,
					color: "#424770",
					letterSpacing: "0.025em",
					fontFamily: "Source Code Pro, monospace",
					"::placeholder": {
						color: "#aab7c4",
					},
				},
				invalid: {
					color: "#9e2146",
				},
			},
		}),
		[fontSize]
	);

	return options;
};

const SplitForm = () => {
	const stripe = useStripe();
	const elements = useElements();
	const options = useOptions();

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (!stripe || !elements) {
			// Stripe.js has not loaded yet. Make sure to disable
			// form submission until Stripe.js has loaded.
			return;
		}

		const payload = await stripe.createPaymentMethod({
			type: "card",
			card: elements.getElement(CardNumberElement),
		});
		console.log(payload);
	};

	return (
		<form onSubmit={handleSubmit}>
			<label>Card number</label>
			<CardNumberElement
				options={options}
			/>
			<label>Expiration date</label>
			<CardExpiryElement
				options={options}
			/>
			<label>CVC</label>
			<CardCvcElement
				options={options}
			/>
			<button type="submit" disabled={!stripe}>
				Pay
			</button>
		</form>
	);
};

export default SplitForm;
