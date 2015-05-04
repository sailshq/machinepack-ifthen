module.exports = {


  friendlyName: 'If between',


  description: 'Generate a value is within the specified range (inclusive).',


  sync: true,


  inputs: {

    value: {
      friendlyName: 'Value',
      description: 'The number to check.',
      example: 3,
      required: true
    },

    min: {
      friendlyName: 'At least (>=)',
      example: 1,
      description: 'The minimum acceptable number',
      required: true
    },

    max: {
      friendlyName: 'No greater than (<=)',
      example: 4,
      description: 'The maximum acceptable number',
      required: true
    }

  },


  exits: {

    success: {
      friendlyName: 'then',
      description: 'The value is within the specified range.'
    },

    otherwise: {
      friendlyName: 'else',
      description: 'The value is NOT within the specified range.'
    }

  },


  fn: function (inputs, exits) {
    var _ = require('lodash');
    if (_.inRange(inputs.value, inputs.min, inputs.max+0.001)){
      return exits.success();
    }
    return exits.otherwise();
  }


};
