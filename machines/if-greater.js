module.exports = {


  friendlyName: 'If greater than (>)',


  description: 'Determine whether the first value is greater than the second.',


  inputs: {

    a: {
      description: 'The first value to check (expected to be greater than the second).',
      extendedDescription: 'A value of any type may be provided.',
      typeclass: '*'
    },

    b: {
      description: 'The second value to check (expected to be less than the first).',
      extendedDescription: 'A value of any type may be provided.',
      typeclass: '*'
    }

  },


  exits: {

    error: {
      description: 'Unexpected error occurred.'
    },

    success: {
      friendlyName: 'then',
      description: 'The first value (a) is greater than the second (b).'
    },

    otherwise: {
      friendlyName: 'else',
      description: 'The first value (a) is NOT greater than the second (b).'
    }

  },


  'defaultExit': 'success',


  'fn': function(inputs, exits, env) {
    if (inputs.a > inputs.b) {
      return exits.success();
    }
    return exits.otherwise();
  }

};
