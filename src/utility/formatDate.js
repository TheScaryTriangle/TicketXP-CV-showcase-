/**
 * @dev Used to convert all the dates from the DB
 */
const formatDate = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getHours()}`;
};

/**
 * @dev Same as Format date but with year
 */
const formatDateWithYear = (dateString) => {
  const date = new Date(dateString);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
};

export default {
  formatDate,
  formatDateWithYear
}
