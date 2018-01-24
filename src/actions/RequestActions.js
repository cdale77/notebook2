import Constants from "../Constants";

const RequestActions = {
  requestStart: requestType => {
    return {
      type: Constants.ACTIONS.REQUEST_START,
      requestType: requestType
    };
  },

  requestEnd: requestType => {
    return {
      type: Constants.ACTIONS.REQUEST_END,
      requestType: requestType
    };
  }
};

export default RequestActions;
