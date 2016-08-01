module.exports = {


  friendlyName: 'If not...',


  description: 'Determine whether the value is "falsey".',


  extendedDescription: 'The \'success\' exit will be triggered for any "falsey" value (`0`, `\'\'`, `null`, `false`, `NaN` and `undefined`).',


  sideEffects: 'cacheable',


  sync: true,


  moreInfoUrl: 'https://www.sitepoint.com/javascript-truthy-falsy/',


  inputs: {

    value: {
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.  If it is "falsey", the \'success\' exit will be triggered.  Otherwise the \'otherwise\' exit will be triggered.',
      example: '===',
      required: true
    }

  },


  exits: {

    success: {
      description: 'The value is "falsey".',
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The value is "truthy".'
    }

  },


  fn: function(inputs, exits, env) {

    // If the input value is falsey, trigger the `success` exit.
    if (!inputs.value) {
      return exits.success();
    }

    // Otherwise trigger the `otherwise` exit.
    return exits.otherwise();
  }

};
