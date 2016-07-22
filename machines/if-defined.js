module.exports = {


  friendlyName: 'If defined',


  description: 'Determine whether the value is defined.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    value: {
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.  If it evaluates to \'undefined\', the \'otherwise\' exit will be triggered.  Otherwise the \'then\' exit will be triggered.',
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
    if (typeof(inputs.value) === 'undefined') {
      return exits.otherwise();
    }
    return exits.success(inputs.value);
  }

};
