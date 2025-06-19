workspace.windowAdded.connect(w => {
  if (!(w.resourceClass == 'jetbrains-toolbox')) return;
  w.skipTaskbar = true;
  w.activeChanged.connect(() => {
    if (w.active) return;
    w.opacity = 0;
    w.closeWindow();
  })
})
