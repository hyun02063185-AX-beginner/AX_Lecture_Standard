window.AX_WEB_DECK_DATA = {
  meta: { title: "Sample Lecture" },
  presentation: { sectionNavigator: "none", resume: false },
  sections: [
    { id: "start", title: "Opening", slides: [
      { type: "opening", title: "A clear starting question", caption: "Replace this question with the material your closing will answer." },
      { type: "statement", title: "Make one idea easy to hold.", caption: "Use a statement slide for the central message." },
      { type: "compare", title: "Compare before deciding.", left: { label: "Signal", text: "What you expect to see." }, right: { label: "Evidence", text: "What actually happened." } }
    ]},
    { id: "close", title: "Close", slides: [
      { type: "section", title: "Bring the thread together", caption: "A section is a content unit, not necessarily one screen." },
      { type: "statement", title: "Leave room for explanation.", caption: "Slides support the presenter; they do not replace the lecture." },
      { type: "closing", title: "Return to the opening question.", caption: "End by recovering the material introduced at the start." }
    ]}
  ]
};
