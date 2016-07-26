module.exports = {


  friendlyName: 'If not between...',


  description: 'Check that a number is not within the specified range (inclusive).',


  extendedDescription: 'Since this is an inclusive check, the \'otherwise\' exit will be triggered if the given number is equal to the minimum or maximum boundary specified.',


  sync: true,


  sideEffects: 'cacheable',


  inputs: {

    value: {
      description: 'The number to check.',
      example: 3,
      required: true
    },

    min: {
      friendlyName: 'Minimum (>=)',
      example: 1,
      description: 'The lower bound to check the number against.',
      extendedDescription: 'Must be less than or equal to the value of `Maximum`.',
      required: true
    },

    max: {
      friendlyName: 'Maximum (<=)',
      example: 4,
      description: 'The upper bound to check the number against.',
      extendedDescription: 'Must be greater than or equal to the value of `Minimum`.',
      required: true
    }

  },


  exits: {

    success: {
      description: 'The number is not within the specified range.'
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The number IS within the specified range.'
    }

  },


  fn: function (inputs, exits) {

    // Import `lodash`.
    var _ = require('lodash');

    // If inputs are inconsistent with expectations, bail out w/ `error`.
    if (inputs.min > inputs.max) {
      return exits.error(new Error('The configured value of the `min` input must be <= that of `max`.'));
    }

    // Because lodash's `inRange` is only inclusive on the bottom side,
    // we'll make it inclusive here by adding an additional check:
    if (_.inRange(inputs.value, inputs.min, inputs.max) || (inputs.max === inputs.value)){
      return exits.otherwise();
    }

    // If the input value is outside the range, trigger the `success` exit.
    return exits.success();
  }


};
