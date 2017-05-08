//@flow
import { connect } from 'react-redux';
import ProjectsView from '../views/projectsView';
import { fetchProjects } from '../actions/projects';
import { push } from 'react-router-redux';

const mapStateToProps = (state) => {
    return {
        projects: state.projects,
        user: state.user
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchProjects: () => {
            dispatch(fetchProjects());
        },
        createNewProject: () => {
            dispatch(push('/project-management'));
        }
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ProjectsView)