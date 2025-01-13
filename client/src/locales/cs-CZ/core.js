import dateFns from 'date-fns/locale/cs';

export default {
  dateFns,

  format: {
    date: 'd.M.yyyy',
    time: 'p',
    dateTime: '$t(format:date) $t(format:time)',
    longDate: 'd MMM',
    longDateTime: "d MMMM 'v' p",
    fullDate: 'd MMM, y',
    fullDateTime: "d MMMM, y 'v' p",
  },

  translation: {
    common: {
      aboutPlanka: 'O aplikaci Planka',
      account: 'Účet',
      actions: 'Akce',
      addAttachment_title: 'Přidat přílohu',
      addComment: 'Přidat komentář',
      addManager_title: 'Přidat vedoucího',
      addMember_title: 'Přidat člena',
      addUser_title: 'Přidat uživatele',
      administrator: 'Administrátor',
      all: 'Vše',
      allChangesWillBeAutomaticallySavedAfterConnectionRestored:
        'Všechny změny budou automaticky uloženy<br />po obnově spojení.',
      areYouSureYouWantToDeleteThisAttachment: 'Opravdu chcete smazat tuto přílohu?',
      areYouSureYouWantToDeleteThisBoard: 'Opravdu chcete smazat tuto tabuli?',
      areYouSureYouWantToDeleteThisCard: 'Opravdu chcete smazat tuto kartu?',
      areYouSureYouWantToDeleteThisComment: 'Opravdu chcete smazat tento komentář?',
      areYouSureYouWantToDeleteThisLabel: 'Opravdu chcete smazat tento štítek?',
      areYouSureYouWantToDeleteThisList: 'Opravdu chcete smazat tento seznam?',
      areYouSureYouWantToDeleteThisProject: 'Opravdu chcete smazat tento projekt?',
      areYouSureYouWantToDeleteThisTask: 'Opravdu chcete smazat tento úkol?',
      areYouSureYouWantToDeleteThisUser: 'Opravdu chcete smazat tohoto uživatele?',
      areYouSureYouWantToLeaveBoard: 'Opravdu chcete opustit tuto tabuli?',
      areYouSureYouWantToLeaveProject: 'Opravdu chcete opustit projekt?',
      areYouSureYouWantToRemoveThisManagerFromProject:
        'Jste si jisti, že chcete tohoto správce z projektu odebrat?',
      areYouSureYouWantToRemoveThisMemberFromBoard:
        'Jste si jisti, že chcete tohoto člena odebrat z tabule?',
      attachment: 'Příloha',
      attachments: 'Přílohy',
      authentication: 'Ověření',
      background: 'Pozadí',
      board: 'Tabule',
      boardNotFound_title: 'Tabule nenalezena',
      canComment: 'Může komentovat',
      canEditContentOfBoard: 'Může upravovat obsah tabule.',
      canOnlyViewBoard: 'Může zobrazit pouze tabuli.',
      cardActions_title: 'Akce na kartě',
      cardNotFound_title: 'Karta nenalezena',
      cardOrActionAreDeleted: 'Karta nebo akce je smazána.',
      color: 'Barva',
      copy_inline: 'copy',
      createBoard_title: 'Vytvořit tabuli',
      createLabel_title: 'Vytvořit štítek',
      createNewOneOrSelectExistingOne: 'Vytvořit nový nebo vyberte<br />již existující.',
      createProject_title: 'Vytvořit projekt',
      createTextFile_title: 'Vytvořit textový soubor',
      currentPassword: 'Aktuální heslo',
      dangerZone_title: 'Nebezpečná zóna',
      date: 'Datum',
      dueDate: 'Termín',
      dueDate_title: 'Termín',
      deleteAttachment_title: 'Smazat přílohu',
      deleteBoard_title: 'Smazat tabuli',
      deleteCard_title: 'Smazat kartu',
      deleteComment_title: 'Smazat komentář',
      deleteLabel_title: 'Smazat štítek',
      deleteList_title: 'Smazat seznam',
      deleteProject_title: 'Smazat projekt',
      deleteTask_title: 'Smazat úkol',
      deleteUser_title: 'Smazat uživatele',
      description: 'Popis',
      detectAutomatically: 'Automatická detekce',
      dropFileToUpload: 'Přetáhnutím nahraj soubor',
      editor: 'Editor',
      editAttachment_title: 'Upravit přílohu',
      editAvatar_title: 'Upravit avatar',
      editBoard_title: 'Upravit tabuli',
      editDueDate_title: 'Upravit termín',
      editEmail_title: 'Upravit e-mail',
      editInformation_title: 'Upravit informace',
      editLabel_title: 'Upravit štítek',
      editPassword_title: 'Upravit heslo',
      editPermissions_title: 'Upravit oprávnění',
      editStopwatch_title: 'Upravit časovač',
      editUsername_title: 'Upravit uživatelské jméno',
      email: 'E-mail',
      emailAlreadyInUse: 'E-mail se již používá',
      enterCardTitle: 'Vlož titulek karty...',
      enterDescription: 'Vlož popis...',
      enterFilename: 'Vlož název souboru',
      enterListTitle: 'Vlož název seznamu...',
      enterProjectTitle: 'Vlož název projektu',
      enterTaskDescription: 'Vlož popis úkolu...',
      filterByLabels_title: 'Filtruj podle štítku',
      filterByMembers_title: 'Filtruj podle člena',
      fromComputer_title: 'Z počítače',
      fromTrello: 'Z Trella',
      general: 'Obecné',
      hours: 'Hodiny',
      importBoard_title: 'Importovat tabuli',
      invalidCurrentPassword: 'Neplatné aktuální heslo',
      labels: 'Štítky',
      language: 'Jazyk',
      leaveBoard_title: 'Opustit tabuli',
      leaveProject_title: 'Opustit projekt',
      list: 'Seznam',
      listActions_title: 'Seznam akcí',
      managers: 'Vedoucí',
      members: 'Členové',
      minutes: 'Minuty',
      moveCard_title: 'Přesunout kartu',
      name: 'Jméno',
      newestFirst: 'Nejnovější',
      newEmail: 'Nový e-mail',
      newPassword: 'Nové heslo',
      newUsername: 'Nové uživatelské jméno',
      noConnectionToServer: 'Není spojení k serveru',
      noBoards: 'Žádné tabule',
      noLists: 'Žádné seznamy',
      noProjects: 'Žádné projekty',
      notifications: 'Oznámení',
      noUnreadNotifications: 'Žádné nepřečtené oznámení',
      oldestFirst: 'Nejstarší',
      openBoard_title: 'Otevřít tabuli',
      optional_inline: 'volitelné',
      organization: 'Společnost',
      phone: 'Telefon',
      preferences: 'Volby',
      pressPasteShortcutToAddAttachmentFromClipboard:
        'Tip: stisknutím Ctrl-V (Cmd-V na Mac) přidáte přílohu ze schránky.',
      project: 'Projekt',
      projectNotFound_title: 'Projekt nenalezen',
      removeManager_title: 'Odstranit vedoucího',
      removeMember_title: 'Odstranit člena',
      searchLabels: 'Hledat štítky...',
      searchMembers: 'Hledat členy...',
      searchUsers: 'Hledat uživatele...',
      searchCards: 'Hledat karty...',
      seconds: 'Vteřin',
      selectBoard: 'Vybrat tabuli',
      selectList: 'Vybrat seznam',
      selectPermissions_title: 'Vybrat oprávnění',
      selectProject: 'Vybrat projekt',
      settings: 'Nastavení',
      sortList_title: 'Řadit podle',
      stopwatch: 'Časovač',
      subscribeToMyOwnCardsByDefault: 'Ve výchozím nastavení odebírat vlastní karty',
      taskActions_title: 'Akce na úkolu',
      tasks: 'Úkoly',
      thereIsNoPreviewAvailableForThisAttachment: 'Pro tuto přílohu není k dispozici žádný náhled.',
      time: 'Čas',
      title: 'Titulek',
      userActions_title: 'Akce na uživateli',
      userAddedThisCardToList: '<0>{{user}}</0><1> přidal kartu do {{list}}</1>',
      userLeftNewCommentToCard: '{{user}} zanechal nový komentář «{{comment}}» k <2>{{card}}</2>',
      userMovedCardFromListToList: '{{user}} přesunul <2>{{card}}</2> z {{fromList}} do {{toList}}',
      userMovedThisCardFromListToList:
        '<0>{{user}}</0><1> přesunul tuto kartu z {{fromList}} do {{toList}}</1>',
      username: 'Uživatelské jméno',
      usernameAlreadyInUse: 'Uživatelské jméno se již používá',
      users: 'Uživatelé',
      version: 'Verze',
      viewer: 'Prohlížeč',
      writeComment: 'Napsat komentář...',
    },

    action: {
      addAnotherCard: 'Přidat další kartu',
      addAnotherList: 'Přidat další seznam',
      addAnotherTask: 'Přidat další úkol',
      addCard: 'Přidat kartu',
      addCard_title: 'Přidat kartu',
      addComment: 'Přidat komentář',
      addList: 'Přidat seznam',
      addMember: 'Přidat člena',
      addMoreDetailedDescription: 'Přidat další detailní popis',
      addTask: 'Přidat úkol',
      addToCard: 'Přidat na kartu',
      addUser: 'Přidat uživatele',
      copyLink_title: 'Zkopírovat odkaz',
      createBoard: 'Vytvořit tabuli',
      createFile: 'Vytvořit soubor',
      createLabel: 'Vytvořit štítek',
      createNewLabel: 'Vytvořit nový štítek',
      createProject: 'Vytvořit projekt',
      delete: 'Smazat',
      deleteAttachment: 'Smazat přílohu',
      deleteAvatar: 'Smazat avatar',
      deleteBoard: 'Smazat tabuli',
      deleteCard: 'Smazat kartu',
      deleteCard_title: 'Smazat kartu',
      deleteComment: 'Smazat komentář',
      deleteImage: 'Smazat obrázek',
      deleteLabel: 'Smazat štítek',
      deleteList: 'Smazat seznam',
      deleteList_title: 'Smazat seznam',
      deleteProject: 'Smazat projekt',
      deleteProject_title: 'Smazat projekt',
      deleteTask: 'Smazat úkol',
      deleteTask_title: 'Smazat úkol',
      deleteUser: 'Smazat uživatele',
      duplicate: 'Duplikovat',
      duplicateCard_title: 'Duplikovat kartu',
      edit: 'Upravit',
      editDueDate_title: 'Upravit termín',
      editDescription_title: 'Upravit popis',
      editEmail_title: 'Upravit e-mail',
      editInformation_title: 'Upravit informace',
      editPassword_title: 'Upravit heslo',
      editPermissions: 'Upravit oprávnění',
      editStopwatch_title: 'Upravit časovač',
      editTitle_title: 'Upravit titulek',
      editUsername_title: 'Upravit uživatelské jméno',
      hideDetails: 'Skrýt detaily',
      import: 'Import',
      leaveBoard: 'Opustit tabuli',
      leaveProject: 'Opustit projekt',
      logOut_title: 'Odhlásit se',
      makeCover_title: 'Vytvořit obal',
      move: 'Přesunout',
      moveCard_title: 'Přesunout kartu',
      remove: 'Odstranit',
      removeBackground: 'Odstranit pozadí',
      removeCover_title: 'Odstranit obal',
      removeFromBoard: 'Odstranit z tabule',
      removeFromProject: 'Odstranit z projektu',
      removeManager: 'Odstranit vedoucího',
      removeMember: 'Odstranit člena',
      save: 'Uložit',
      showAllAttachments: 'Zozbrazit všechny přílohy ({{hidden}} skryté)',
      showDetails: 'Zobrazit detaily',
      showFewerAttachments: 'Zobrazit méně příloh',
      sortList_title: 'Řadit podle',
      start: 'Start',
      stop: 'Stop',
      subscribe: 'Odebírat',
      unsubscribe: 'Neodebírat',
      uploadNewAvatar: 'Nahrát nový avatar',
      uploadNewImage: 'Nahrát nový obrázek',
    },
  },
};
