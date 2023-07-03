const nestedSortables = document.querySelectorAll('.list-group');

    for (var i = 0; i < nestedSortables.length; i++) {
      new Sortable(nestedSortables[i], {
        group: 'whatever',
        handle: '.list-group-item',
        // 		animation: 150,
        // 		fallbackOnBody: true,
        // 		swapThreshold: 0.65,
        // 		emptyInsertThreshold: 8,
        // 		filter: '.filtered',
        multiDrag: true,
        selectedClass: 'selected',
        // 		onEnd: (event) => {
        // 			const movedEl = event.item || null;
        // 			const multiMovedEls = event.items || null;
        // 			const targetEl = event.to;

        // 			//console.log('multiMovedEls', multiMovedEls);

        // 			if (multiMovedEls.length > 0) {
        // 				multiMovedEls.forEach((el, index) => {
        // 					console.log(`Moved el ${index}`, el.dataset.phrasecode);
        // 				});
        // 			} else {
        // 				console.log(`movedEl single`, movedEl.dataset.phrasecode);
        // 			}
        // 		}
      });
    }