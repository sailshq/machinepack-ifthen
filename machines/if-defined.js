module.exports = {


  friendlyName: 'If defined',


  description: 'Determine whether the value is defined.',


  inputs: {

    value: {
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.  If it evaluates to \'undefined\', the \'otherwise\' exit will be triggered.  Otherwise the \'then\' exit will be triggered.',
      friendlyName: 'value',
      typeclass: '*',
      required: true
    }

  },


  exits: {

    error: {
      description: 'Unexpected error occurred.'
    },

    success: {
      friendlyName: 'then',
      description: 'The value is defined.',
      getExample: function(inputs, env, input) {
        return inputs.value;
      }
    },

    otherwise: {
      friendlyName: 'else',
      description: 'The value is undefined.'
    }

  },


  'defaultExit': 'success',


  'fn': function(inputs, exits, env) {
    if (typeof(inputs.value) === 'undefined') {
      return exits.otherwise();
    }
    return exits.success(inputs.value);
  }

};
