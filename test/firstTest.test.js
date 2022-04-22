import React from 'react';
import { test, describe, it } from 'mocha' ;
import { expect } from 'chai';
import { mount } from 'enzyme';
import App from '../src/App';

  describe('#indexOf()', () => {
    // it('should be a equal', () => {
    //   const wishes = "wishes";
    //   expect(wishes).equal('wishes')
    // })

    // it('should be string', () => {
    //   const wishes = "wishes";
    //   expect(wishes).to.be.a('string')
    // })

    it("should return a Component React", () => {
      const wrapper = mount( <App />)
      console.log(wrapper);
      expect(wrapper).to.be(true)
    })
  })