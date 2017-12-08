/* eslint-disable */
import {
  ADD_TOPICS,
  START_LOADING_TOPICS,
  STOP_LOADING_TOPICS,
  SET_CURRENT_TOPIC,
  EMPTY_CURRENT_TOPIC
} from "./types";

export const addTopics = topics => {
  return {
    type: ADD_TOPICS,
    topics
  };
};

export const startLoading = () => {
  return {
    type: START_LOADING_TOPICS
  };
};

export const stopLoading = () => {
  return {
    type: STOP_LOADING_TOPICS
  };
};

export const setCurrentTopic = topic => {
  return {
    type: SET_CURRENT_TOPIC,
    topic
  };
};

export const emptyCurrentTopic = () => {
  return {
    type: EMPTY_CURRENT_TOPIC
  };
};