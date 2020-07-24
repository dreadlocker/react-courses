import React, { useState, useEffect } from 'react';
import CourseForm from './CourseForm';
import courseStore from '../stores/courseStore';
import { toast } from "react-toastify";
import { courseActions } from '../actions/courseActions';

const ManageCoursePage = (props) => {
    const [errors, setErrors] = useState({});
    const [course, setCourse] = useState({
        id: null,
        slug: '',
        title: '',
        authorId: null,
        category: '',
    });

    useEffect(() => {
        const slug = props.match.params.slug
        if (slug) setCourse(courseStore.getCoursesBySlug(slug))
    }, [props.match.params.slug]);

    const handleChange = ({ target }) => {
        setCourse({ ...course, [target.name]: target.value })
    }

    const formIsValid = () => {
        const _errors = {}
        if (!course.title) _errors.title = 'Title is required'
        if (!course.title) _errors.authorId = 'Author ID is required'
        if (!course.title) _errors.category = 'Category is required'
        setErrors(_errors)
        return Object.keys(_errors).length === 0
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!formIsValid()) return;
        courseActions(course)
            .then(() => {
                console.log('then')
                props.history.push('/courses')
                toast.success('Course saved.')
            })
    }

    return (
        <>
            <h2>Manage Course</h2>
            <CourseForm errors={errors} course={course} onChange={handleChange} onSubmit={handleSubmit} />
        </>
    );
}

export default ManageCoursePage;