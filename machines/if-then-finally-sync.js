module.exports = {


  friendlyName: 'If..Then..Finally (sync)',


  description: 'If the provided value is true, then run the "then" circuit.  Otherwise run the "else" circuit.  Either way, exit "success".',


  sync: true,


  inputs: {

    bool: {
      friendlyName: 'Condition',
      description: 'The true/false value to check.',
      example: true
    },

    then: {
      friendlyName: 'Then...',
      description: 'The code to run if the condition is truthy.',
      example: '->',
      contract: {
        sync: true,
        inputs: {},
        exits: {
          success: {
            outputFriendlyName: 'Data',
            outputDescription: 'The result (if any) of executing the `Then...` branch.',
            like: 'expectedOutput',
            description: 'The `Then...` branch finished executing.'
          }
        }
      },
      required: true,
    },

    orElse: {
      friendlyName: 'Or else...',
      description: 'The code to run if the condition is NOT truthy.',
      example: '->',
      contract: {
        sync: true,
        inputs: {},
        exits: {
          success: {
            outputFriendlyName: 'Data',
            outputDescription: 'The result (if any) of executing the `Or else...` branch.',
            like: 'expectedOutput',
            description: 'The `Or else...` branch finished executing.'
          }
        }
      }
    },

    expectedOutput: {
      description: 'An example of the expected output value.',
      example: '*'
    }

  },


  exits: {

    success: {
      outputFriendlyName: 'Data',
      outputDescription: 'The data returned from either `then` or `orElse` (if relevant).',
      description: 'The `Then...` or `Or else...` branch finished executing.',
      like: 'expectedOutput'
    },

  },


  fn: function (inputs,exits) {

    var result;

    if (inputs.bool) {
      result = inputs.then().execSync();
    }
    else if (typeof inputs.orElse !== 'undefined') {
      result = inputs.orElse().execSync();
    }

    return exits.success(result);

  },



};
