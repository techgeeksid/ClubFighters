const expectThrow = async (promise, message = null) => {
      try {
        await promise;
        assert.fail('Expected throw not received');
      } catch (error) {
        if (message) {
          assert.equal(error.message, message);
        }
        assert.isOk(true);
      }
    };

export default expectThrow
