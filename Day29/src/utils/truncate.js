export const truncateText = (text, maxlength) => {
    return text.length > maxlength ? text.slice(0, maxlength) + '...' : text;
};