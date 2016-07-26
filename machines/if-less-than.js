module.exports = {


  friendlyName: 'If less than (<)',


  description: 'Determine whether the first value is less than the second.',


  sideEffects: 'cacheable',


  sync: true,


  inputs: {

    a: {
      friendlyName: 'Lesser value',
      description: 'The first value to check (expected to be less than the second).',
      extendedDescription: 'A value of any type may be provided.',
      example: '===',
      required: true
    },

    b: {
      friendlyName: 'Other value',
      description: 'The second value to check (expected to be greater than the first).',
      extendedDescription: 'A value of any type may be provided.',
      example: '===',
      required: true
    },

    isInclusive: {
      friendlyName: 'Inclusive? (<=)',
      description: 'Whether to trigger the \'success\' exit if both values are equal.',
      defaultsTo: false,
      example: true,
      extendedDescription: 'If set, this machine will use the <= operator for comparison.'
    }

  },


  exits: {

    success: {
      description: 'The first value is less than (or equal to, if `Inclusive?` was set) the second.'
    },

    otherwise: {
      friendlyName: 'Else',
      description: 'The first value is NOT less than (or equal to, if `Inclusive?` was set) the second.'
    }

  },


  'fn': function(inputs, exits, env) {

    // If using the `isInclusive` flag, check whether a <= b.
    if (inputs.isInclusive){

      // If so, return through the `success` exit.
      if (inputs.a <= inputs.b) {
        return exits.success();
      }

      // Otherwise, return through `otherwise`.
      return exits.otherwise();
    }

    // If not using the `isInclusive` flag, check whether a > b.
    // If so, return through the `success` exit.
    if (inputs.a < inputs.b) {
      return exits.success();
    }

    // Otherwise, return through `otherwise`.
    return exits.otherwise();
  }

};
