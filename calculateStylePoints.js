const calculateStylePoints = (styleNotes) => {

    let maxNote = Math.max.apply(null, styleNotes);
    let minNote = Math.min.apply(null, styleNotes);
    let sumNotes = 0;

    styleNotes.forEach(note => {
        sumNotes += note;
    });
    return sumNotes - maxNote - minNote;

};

module.exports = calculateStylePoints;
