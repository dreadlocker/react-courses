import React from "react";
import PropTypes from 'prop-types';
import TextInput from './common/TextInput';

function CourseForm(props) {
  return (
    < form onSubmit={props.onSubmit} >
      <TextInput
        id='title'
        name='title'
        label='Title'
        onChange={props.onChange}
        value={props.course.title}
        error={props.errors.title}
      />

      <div className="form-group">
        <label htmlFor="author">Author</label>
        <div className="field">
          <select
            onChange={props.onChange}
            value={props.course.authorId || ''}
            id="author"
            name="authorId"
            className="form-control"
          >
            <option value="" />
            <option value="1">Cory House</option>
            <option value="2">Scott Allen</option>
          </select>
        </div>
        {props.errors.authorId && (
          <div className="alert alert-danger">{props.errors.authorId}</div>
        )}
      </div>

      <TextInput
        id='category'
        name='category'
        label='Category'
        onChange={props.onChange}
        value={props.course.category}
        error={props.errors.category}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form >
  );
}

CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
}

export default CourseForm;
