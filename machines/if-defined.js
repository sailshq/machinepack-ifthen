module.exports = {


  friendlyName: 'If defined',


  description: 'Determine whether the value is defined.',


  extendedDescription: 'The \'success\' exit will be triggered for any value other than `undefined`.  You can use this machine to "guarantee" that a value is defined and usable by other machines.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    value: {
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.  If it evaluates to `undefined`, the \'otherwise\' exit will be triggered.  Otherwise the \'success\' exit will be triggered.',
      example: '==='
    }

  },


  exits: {

    success: {
      description: 'The value is defined.',
      like: 'value',
      outputFriendlyName: 'Value',
      outputDescription: 'The input value (guaranteed to be defined).'
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The value is not defined.'
    }

  },


  fn: function(inputs, exits, env) {

    // If the input valid is undefined, trigger the `otherwise` exit.
    if (typeof(inputs.value) === 'undefined') {
      return exits.otherwise();
    }

    // Otherwise trigger the `success` exit with the input value as output.
    return exits.success(inputs.value);
  }

};
