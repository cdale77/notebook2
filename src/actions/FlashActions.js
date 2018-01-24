import Constants from "../Constants";

const FlashActions = {
  flashSuccess: message => {
    return {
      type: Constants.ACTIONS.FLASH_SUCCESS,
      message: message
    };
  },

  flashError: message => {
    return {
      type: Constants.ACTIONS.FLASH_ERROR,
      message: message
    };
  },

  flashClear: () => {
    return {
      type: Constants.ACTIONS.FLASH_CLEAR
    };
  }
};

export default FlashActions;
