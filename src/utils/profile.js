/**
 * Get first and last initials from a name
 */
export const getInitials = (firstName = "", lastName = "") => {
    return `${firstName.split("")[0]}${lastName.split("")[0]}`;
}