import * as yup from "yup";

export const validationSchema = yup.object({
	name: yup
		.string()
		.required("Введіть своє ім'я")
		.min(2, "Ім'я занадто коротке"),

	email: yup
		.string()
		.required("Електронна пошта обов'язкова")
		.email("Введіть дійсну електронну пошту"),
	phone: yup
		.string()
		.required("Телефон є обов'язковим!")
		.matches(
			/^\+?3?8?(0\d{9})$/,
			"Введіть дійсний номер телефону у форматі +380xxxxxxxxx"
		),
});
