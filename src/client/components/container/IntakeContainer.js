import { connect } from "react-redux"
import * as intakeActions from "../../actions/intakes"
import Intake from "../pure/Intake"

function mapStateToProps(state) {
  return {}
}

export default connect(
	mapStateToProps,
	intakeActions
)(Intake)