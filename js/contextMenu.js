$(function () {
  $.contextMenu({
    selector: ".depth1",
    items: {
      newNote: {
        name: "폴더 만들기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      changeNote: {
        name: "이름 바꾸기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });

  $.contextMenu({
    selector: ".depth2",
    items: {
      changeNote: {
        name: "이름 바꾸기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      deleteNote: {
        name: "폴더 삭제",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });

  $.contextMenu({
    selector: ".context-menu-modify",
    items: {
      exportNote: {
        name: "내보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      moveNote: {
        name: "이동",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });

  $.contextMenu({
    selector: ".context-menu-insert",
    items: {
      exportNote: {
        name: "내보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      hwpNote: {
        name: "hwp 업로드",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      assignNote: {
        name: "작업자 할당",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      moveNote: {
        name: "이동",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      deleteNote: {
        name: "기록삭제",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });

  $.contextMenu({
    selector: ".context-menu-none",
    items: {
      exportNote: {
        name: "내보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      uploadNote: {
        name: "추가업로드",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      uploadDelNote: {
        name: "추가업로드 삭제",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      moveNote: {
        name: "이동",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      trashNote: {
        name: "휴지통으로보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });

  $.contextMenu({
    selector: ".check-change",
    items: {
      exportNote: {
        name: "내보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      uploadNote: {
        name: "추가 업로드",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      uploadDelNote: {
        name: "추가 업로드 삭제",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      moveNote: {
        name: "이동",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
      trashNote: {
        name: "휴지통으로 보내기",
        callback: function (key, opt) {
          alert("Clicked on " + key);
        },
      },
    },
  });
});
