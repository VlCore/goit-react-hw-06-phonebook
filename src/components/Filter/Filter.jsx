import PropTypes from 'prop-types';
import { Input } from './Filter.styled';

export const Filter = ({ onChangedFilter, filterValue }) => {
    return (
        <>
            <Input
                type="text"
                name="filter"
                onChange={onChangedFilter}
                value={filterValue}
            />
        </>
    )
}

Filter.propTypes = {
    // filterValue: PropTypes.string.isRequired,
    onChangedFilter:PropTypes.func.isRequired,
};