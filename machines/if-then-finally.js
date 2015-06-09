module.exports = {


  friendlyName: 'If..Then..Finally',


  description: 'If the provided value is true, then run the "then" circuit.  Otherwise run the "else" circuit.  Either way, exit "success".',


  inputs: {

    bool: {
      description: 'The true/false value to check.',
      example: true
    },

    then: {
      example: '->',
      contract: {
        inputs: {},
        exits: {
          success: {
            like: 'expectedOutput'
          }
        }
      }
    },

    else: {
      example: '->',
      contract: {
        inputs: {},
        exits: {
          success: {
            like: 'expectedOutput'
          }
        }
      }
    },

    expectedOutput: {
      description: 'An example of the expected output value.',
      example: '*',
      required: true
    }

  },


  exits: {

    success: {
      variableName: 'result',
      getExample: function (inputs, env){
        var _ = env._;
        return inputs.expectedOutput;
      },
      description: 'Done.',
    },

  },


  fn: function (inputs,exits) {

    if (inputs.bool) {
      inputs.then().exec({
        error: exits.error,
        success: function (result){
          return exits.success(result);
        }
      });
    }
    else {
      inputs.else().exec({
        error: exits.error,
        success: function (result){
          return exits.success(result);
        }
      });
    }
  },



};
