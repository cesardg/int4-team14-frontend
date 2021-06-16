 <Turn who={realtimeGameData.currentPlayer} />
      <Notes
        notes={notes}
        player="user"
        handleFormSubmission={(e) => handleFormSubmissionNotes(e)}
      />
      <HackerDiscoveries gameData={gameData} />
      <HackerInterests gameData={gameData} />
      <HackerHack
        handleSubmitForm={(value) => handleFormGuessPass(value)}
        feedback={hackerGuessFeedback}
        start={hackerStart}
      />
      {/* acties */}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "action" ? (
        <div className={styles.action}>
          <HackerAction
            onClickButton={(action) => handleClickAction(action)}
            start={hackerStart}
          />
        </div>
      ) : (
        ""
      )}
      {windowComponent === "ad" ? (
        <HackerAd
          gameData={gameData}
          onClickButton={(value) => handleClickAd(value)}
          start={hackerStart}
        />
      ) : (
        ""
      )}
      {windowComponent === "decryption" ? (
        <HackerDecryption
          gameData={gameData}
          handleUpdatedDiscoveries={(gameData, discovery) =>
            handleUpdatedDiscoveries(gameData, discovery)
          }
          action={hackerDecryptionAction}
        />
      ) : (
        ""
      )}
      {windowComponent === "screencapture" ? <HackerScreencapture /> : ""}
      {windowComponent === "vpn" ? <HackerVpn /> : ""}
      {realtimeGameData.currentPlayer === "hacker" &&
      realtimeGameData.actionHacker === "random" ? (
        <div className={styles.random}>
          <HackerRandom
            randomCard={randomOption}
            onClickButton={(value) => handleClickRandom(value)}
          />
        </div>
      ) : (
        ""
      )}