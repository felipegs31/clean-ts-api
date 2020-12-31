import { EmailValidatorAdapter } from '../../../adapter/validators/email-validator-adaptor'
import { EmailValidation } from '../../../../presentation/helper/validators/email-validation'
import { RequiredFieldValidation } from '../../../../presentation/helper/validators/required-field-validation'
import { ValidationComposite } from '../../../../presentation/helper/validators/validation-composite'
import { Validation } from '../../../../presentation/protocols/validation'

export const makeLoginValidation = (): ValidationComposite => {
  const validations: Validation[] = []
  for (const field of ['email', 'password']) {
    validations.push(new RequiredFieldValidation(field))
  }
  validations.push(new EmailValidation('email', new EmailValidatorAdapter()))

  return new ValidationComposite(validations)
}