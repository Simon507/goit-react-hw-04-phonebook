import PropTypes from 'prop-types';

import { FindBlock, FindSection } from './filter.styles';

export const Filter = ({ onFind }) => {
  return (
    <>
      <FindSection>
        <FindBlock>
          <label htmlFor="name">Find contact</label>
          <input
            onChange={e => {
              onFind(e.target.value);
            }}
            id="name"
            name="name"
            placeholder="Please enter name"
          />
        </FindBlock>
      </FindSection>
    </>
  );
};

Filter.propTypes = {
  onFind: PropTypes.func.isRequired,
};
