import React from 'react';
import { connect, dispatch } from 'react-redux';
import Link from '../components/Link';
import { setVisibilityFilter } from '../Actions';

const mapStateToProps = (state, ownProps) => (
    {
        active: state.visibilityFilter === ownProps.filter
    }
);

const mapDispatchToProps = (dispatch, ownProps) => (
    {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    }
)

const FilterLink = connect(mapStateToProps, mapDispatchToProps)(Link);
export default FilterLink;
