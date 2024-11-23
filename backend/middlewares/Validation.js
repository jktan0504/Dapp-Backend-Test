const { plainToClass } = require('class-transformer');
const { validate } = require('class-validator');

export const validationMiddleware = (dto) => {
	return async (req, res, next) => {
		const dtoInstance = plainToClass(dto, req.body);
		const errors = await validate(dtoInstance);
		if (errors.length > 0) {
			return res.status(400).json({ errors: this.formatErrors(errors) });
		}
		req.body = dtoInstance;
		next();
	};
};

const formatErrors = (errors) => {
	return errors.reduce((acc, err) => {
		acc[err.property] = Object.values(err.constraints);
		return acc;
	}, {});
};