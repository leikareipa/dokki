/*
 * 2021 Tarpeeksi Hyvae Soft
 *
 * Software: dokki
 *
 */

// Takes in a guide topic title string (e.g. "System requirements") and returns
// a reduced version of the string such that it can be used e.g. as a DOM element
// id (e.g. "System requirements" -> "system-requirements").
export function simplified_topic_title(title)
{
    return title.toLowerCase()
                .replace(/[^a-zA-Z\d\s-]/g, "")
                .replace(/\s+/g, "-")
}
