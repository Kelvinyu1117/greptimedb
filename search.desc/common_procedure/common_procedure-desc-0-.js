searchState.loadedDescShard("common_procedure", 0, "Common traits and structures for the procedure framework.\nBoxed Procedure.\nLoader to recover the Procedure instance from serialized …\nProcedure execution context.\nContextProvider provides information about procedures in …\nthe procedure is done.\nThe procedure is finished.\nThe procedure is still executing.\nThe procedure is failed and cannot proceed anymore.\nKeys to identify required locks.\nThe procedure is failed and commits state before rolling …\nA <code>Procedure</code> represents an operation or a set of operations …\nUnique id for Procedure.\n<code>ProcedureManager</code> executes Procedure submitted to it.\nRef-counted pointer to the ProcedureManager.\nState of a submitted procedure.\nA procedure with specific id.\nThe procedure is failed and can be retried.\nThe procedure is failed and can be rollback.\nThe procedure is running.\nProcedure execution status.\nThe procedure has suspended itself and is waiting for …\nDump the state of the procedure to a string.\nExecute the procedure.\nId of the procedure.\nReturns the LockKey that this procedure needs to acquire.\nCommon traits and structures for the procedure framework.\nId of the procedure.\nQuery the procedure state.\nQuery the procedure state.\nReturns a Watcher to watch ProcedureState of specific …\nProcedureManager context provider.\nRegisters loader for specific procedure type <code>name</code>.\nStarts the background GC task.\nStops the background GC task.\nSubmits a procedure to execute.\nType name of the procedure.\nWhether the framework needs to persist the procedure.\nWhether the framework needs to persist the procedure.\nSNAFU context selector for the <code>Error::CorruptedData</code> variant\nSNAFU context selector for the <code>Error::DeleteState</code> variant\nSNAFU context selector for the <code>Error::DeleteStates</code> variant\nSNAFU context selector for the <code>Error::DuplicateProcedure</code> …\nContains the error value\nProcedure error.\nSNAFU context selector for the <code>Error::External</code> variant\nSNAFU context selector for the <code>Error::FromJson</code> variant\nSNAFU context selector for the <code>Error::ListState</code> variant\nSNAFU context selector for the <code>Error::LoaderConflict</code> …\nSNAFU context selector for the <code>Error::ManagerNotStart</code> …\nContains the success value\nSNAFU context selector for the <code>Error::ParseSegmentKey</code> …\nSNAFU context selector for the <code>Error::ProcedureExec</code> variant\nSNAFU context selector for the <code>Error::ProcedurePanic</code> …\nSNAFU context selector for the <code>Error::PutState</code> variant\nSNAFU context selector for the <code>Error::RetryLater</code> variant\nSNAFU context selector for the <code>Error::RetryTimesExceeded</code> …\nSNAFU context selector for the <code>Error::RollbackNotSupported</code> …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::RollbackTimesExceeded</code>…\nSNAFU context selector for the …\nSNAFU context selector for the …\nSNAFU context selector for the <code>Error::SubprocedureFailed</code> …\nSNAFU context selector for the <code>Error::ToJson</code> variant\nSNAFU context selector for the <code>Error::Unexpected</code> variant\nSNAFU context selector for the <code>Error::WaitWatcher</code> variant\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nConsume the selector and return the associated error\nCreates a new Error::External error from source <code>err</code>.\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nConsume the selector and return a <code>Result</code> with the …\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCreates a new Error::RetryLater or Error::External error …\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nDetermine whether it is a retry later type through …\nCreates a new Error::RetryLater error from source <code>err</code>.\nProcedure loaded from store.\nA ProcedureManager that maintains procedure states locally.\nThe expired time of a procedure’s metadata.\nConfig for LocalManager.\nShared context of the manager.\nShared metadata of a procedure.\nReference counted pointer to ProcedureMeta.\nBuild remove outedated meta task\nNotify to wait for subprocedures.\nId of child procedures.\nReturns true if the procedure with specific <code>procedure_id</code> …\nFinds procedures by given <code>procedure_ids</code>.\nIds and finished time of finished procedures.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nId of this procedure.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nAppend subprocedures to given <code>buffer</code>.\nLoad procedure with specific <code>procedure_id</code> from cached …\nLoad procedure from specific ProcedureMessage.\nProcedure loaders. The key is the type name of the …\nLock required by this procedure.\nMessages loaded from the procedure store.\nReturns a new ManagerContext.\nCreate a new LocalManager with specific <code>config</code>.\nNotify a suspended parent procedure with specific …\nReturns the number of subprocedures.\nClean resources of finished procedures.\nParent procedure id.\nReturns all procedures in the tree (including given <code>root</code> …\nPush <code>procedure_id</code> of the subprocedure to the metadata.\nRecovers unfinished procedures and reruns them.\nRemove cached ProcedureMessage by ids.\nRemove metadata of outdated procedures.\nGC task.\nReturn <code>ProcedureManager</code> is running.\nRunning flag.\nUpdate current ProcedureState.\nSet the running flag.\nReturns the ProcedureState of specific <code>procedure_id</code>.\nReturns current ProcedureState.\nReceiver to watch the procedure state.\nSender to notify the procedure state.\nSubmit a root procedure with given <code>procedure_id</code>.\nTry to insert the <code>procedure</code> to the context if there is no …\nReturns the Watcher of specific <code>procedure_id</code>.\nA guard to cleanup procedure state.\nThe procedure is finished successfully.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new ProcedureGuard.\nRun the procedure.\nReturn <code>ProcedureManager</code> is running.\nSubmit a subprocedure with specific <code>procedure_id</code>.\nExtend the retry time to wait for the next retry.\nLocks based on a key, allowing other keys to lock …\nClean up stale locks.\nReturns the argument unchanged.\nReturns the argument unchanged.\nThe inner map of locks for specific keys.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLocks the key with shared read access, returning a guard.\nLocks the key with exclusive write access, returning a …\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\n<code>None</code> stands for no limit.\nMax retry times of procedure.\nInitial retry delay of procedures, increases exponentially.\nBoxed Procedure.\nLoader to recover the Procedure instance from serialized …\nProcedure execution context.\nContextProvider provides information about procedures in …\nReference-counted pointer to ContextProvider.\nthe procedure is done.\nThe procedure is finished.\nThe procedure is still executing.\nThe procedure is failed and cannot proceed anymore.\nThe initial procedure state.\nKeys to identify required locks.\nSNAFU context selector for the <code>ParseIdError</code> error\nThe procedure is failed and commits state before rolling …\nA <code>Procedure</code> represents an operation or a set of operations …\nUnique id for Procedure.\n<code>ProcedureManager</code> executes Procedure submitted to it.\nRef-counted pointer to the ProcedureManager.\nState of a submitted procedure.\nA procedure with specific id.\nThe procedure is failed and can be retried.\nThe procedure is failed and can be rollback.\nThe procedure is running.\nProcedure execution status.\nThe procedure has suspended itself and is waiting for …\nReturns a Status::Done without output.\nReturns a Status::Done with output.\nDump the state of the procedure to a string.\nReturns the error.\nExecute the procedure.\nReturns a Status::Executing with given <code>persist</code> flag.\nReturns a ProcedureState with failed state.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nId of the procedure.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns <code>true</code> if the procedure is done.\nReturns true if the procedure state is done.\nReturns true if the procedure state failed.\nReturns true if the procedure state is prepare rollback.\nReturns true if the procedure state is retrying.\nReturns true if the procedure state is rolling back.\nReturns true if the procedure state is running.\nReturns the keys to lock.\nReturns the LockKey that this procedure needs to acquire.\nReturns <code>true</code> if the procedure needs the framework to …\nReturns a new LockKey with keys from specific <code>iter</code>.\nReturns a new LockKey with keys from specific <code>iter</code>.\nParses id from string.\nReturns a ProcedureState with prepare rollback state.\nId of the procedure.\nQuery the procedure state.\nQuery the procedure state.\nReturns a Watcher to watch ProcedureState of specific …\nProcedureManager context provider.\nReturns a new unique ProcedureId randomly.\nThe hook is called after the procedure recovery.\nThe hook is called after the procedure recovery.\nRegisters loader for specific procedure type <code>name</code>.\nReturns a ProcedureState with retrying state.\nRollback the failed procedure.\nRollback the failed procedure.\nIndicates whether it supports rolling back the procedure.\nIndicates whether it supports rolling back the procedure.\nReturns a ProcedureState with rolling back state.\nReturns a new LockKey with only one key.\nReturns a new LockKey with only one key.\nStarts the background GC task.\nStops the background GC task.\nSubmits a procedure to execute.\nType name of the procedure.\nReturns a new ProcedureWithId that holds specific <code>procedure</code>\nWhether the framework needs to persist the procedure.\nWhether the framework needs to persist the procedure.\nSuffix type of the key.\nKey prefix of procedure store.\nKey to refer the procedure in the ProcedureStore.\nSerialized data of a procedure.\nA collection of all procedures’ messages.\nProcedure storage layer.\nWrite commit flag to the storage.\nThe data of the procedure.\nDelete states of procedure from the storage.\nErrors raised during the procedure.\nA list of finished procedures’ ids\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nLoad procedures from the storage.\nA map of uncommitted procedures\nCreates a new ProcedureStore from specific StateStoreRef.\nParent procedure id.\nTry to parse the key from specific <code>input</code>.\nConstructs a path for procedure store.\nA map of rolling back procedures\nWrite rollback flag to the storage.\nCurrent step.\nDump the <code>procedure</code> to the storage.\nType name of the procedure. The procedure framework also …\nThe set of keys.\nKey value from state store.\nStream that yields KeyValue.\nStateStore based on ObjectStore.\nStorage layer for persisting procedure’s state.\nReference counted pointer to StateStore.\nDeletes key-value pairs by <code>keys</code>.\nDeletes one key-value pair by <code>key</code>. Return <code>Ok</code> if the key …\nReturns the argument unchanged.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nCalls <code>U::from(self)</code>.\nReturns a new ObjectStateStore with specific <code>store</code>.\nPuts <code>key</code> and <code>value</code> into the store.\nReturns the key-value pairs under <code>path</code> in top down way.\nReturns the argument unchanged.\nCalls <code>U::from(self)</code>.\nMerges multiple values into a single key-value pair. …\nMerges multiple values that have the same prefix of the key\nWatcher to watch procedure state.\nWait the Watcher until the ProcedureState is done.")