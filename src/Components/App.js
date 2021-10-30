import Main from "./Main";
import { connect } from 'react-redux';
import { bindActionCreators } from "redux";
import * as actions from "../redux/actions";

const mapStateToProps = (state) => ({
    posts: state
})

const mapDispatchToProps = (dispatch) => (
    bindActionCreators(actions, dispatch)
)

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
