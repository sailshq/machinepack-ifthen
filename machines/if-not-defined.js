module.exports = {


  friendlyName: 'If not defined',


  description: 'Determine whether the value is undefined.',


  extendedDescription: 'The \'success\' exit will be triggered _only_ for the value `undefined`.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    value: {
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.  If it evaluates to `undefined`, the \'success\' exit will be triggered.  Otherwise the \'otherwise\' exit will be triggered.',
      example: '==='
    }

  },


  exits: {

    success: {
      description: 'The value is undefined.',
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The value is defined.',
      like: 'value',
      outputFriendlyName: 'Value',
      outputDescription: 'The input value (guaranteed to be defined).'
    }

  },


  fn: function(inputs, exits, env) {

    // If the input valid is undefined, trigger the `success` exit.
    if (typeof(inputs.value) === 'undefined') {
      return exits.success();
    }

    // Otherwise trigger the `otherwise` exit with the input value as output.
    return exits.otherwise(inputs.value);
  }

};
