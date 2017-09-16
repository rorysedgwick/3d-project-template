
var THREE = require('three');
var assert = require('assert');

describe('The THREE object', function() {

    it('should exist', function() {

        assert.ok(THREE);

    });

    it('should contain the Geometry constructor', function() {

        assert.ok(THREE.Geometry);
        assert.equal(typeof THREE.Geometry, 'function');

    });

    it('should contain the WebGRLRenderer constructor', function() {

      assert.ok(THREE.WebGLRenderer);

    });
});
