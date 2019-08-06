import DS from 'ember-data';
import { validator, buildValidations } from 'ember-cp-validations';

const Validations = buildValidations({
  title: {
    description: 'Title',
    validators: [
      validator('presence', true)
    ]
  },

  description: {
    description: 'Description',
    validators: [
      validator('presence', true)
    ]
  }
});

export default DS.Model.extend(Validations, {
  title: DS.attr('string'),
  description: DS.attr('string'),
  category: DS.belongsTo('category')
});
