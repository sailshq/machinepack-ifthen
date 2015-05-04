module.exports = {


  friendlyName: 'If between',


  description: 'Generate a value is within the specified range.',


  sync: true,


  inputs: {

    value: {
      friendlyName: 'Value',
      description: 'The value to check.',
      extendedDescription: 'A value of any type may be provided.',
      typeclass: '*'
    },

    min: {
      friendlyName: 'At least (>=)',
      example: 1,
      description: 'The minimum acceptable number',
      required: true
    },

    max: {
      friendlyName: 'No greater than (<=)',
      example: 1,
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
    if (_.inRange(inputs.value, inputs.min, inputs.max)){
      return exits.success();
    }
    return exits.otherwise();
  }


};
