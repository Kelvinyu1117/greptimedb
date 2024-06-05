(function() {var implementors = {
"cmd":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"cmd/cli/repl/struct.Repl.html\" title=\"struct cmd::cli::repl::Repl\">Repl</a>"]],
"common_base":[["impl&lt;S: Zeroize&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"common_base/secrets/struct.SecretBox.html\" title=\"struct common_base::secrets::SecretBox\">SecretBox</a>&lt;S&gt;"]],
"common_meta":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"common_meta/region_keeper/struct.OperatingRegionGuard.html\" title=\"struct common_meta::region_keeper::OperatingRegionGuard\">OperatingRegionGuard</a>"]],
"common_procedure":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"common_procedure/local/runner/struct.ProcedureGuard.html\" title=\"struct common_procedure::local::runner::ProcedureGuard\">ProcedureGuard</a>"]],
"common_runtime":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"common_runtime/runtime/struct.Dropper.html\" title=\"struct common_runtime::runtime::Dropper\">Dropper</a>"],["impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"common_runtime/repeated_task/struct.RepeatedTask.html\" title=\"struct common_runtime::repeated_task::RepeatedTask\">RepeatedTask</a>&lt;E&gt;"]],
"datanode":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"datanode/alive_keeper/struct.CountdownTaskHandle.html\" title=\"struct datanode::alive_keeper::CountdownTaskHandle\">CountdownTaskHandle</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"datanode/heartbeat/struct.HeartbeatTask.html\" title=\"struct datanode::heartbeat::HeartbeatTask\">HeartbeatTask</a>"]],
"flow":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"flow/adapter/worker/struct.WorkerHandle.html\" title=\"struct flow::adapter::worker::WorkerHandle\">WorkerHandle</a>"],["impl&lt;'referred, 'df&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"flow/compute/render/struct.Context.html\" title=\"struct flow::compute::render::Context\">Context</a>&lt;'referred, 'df&gt;"]],
"index":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/create/sort/external_provider/__mock_MockExternalTempFileProvider_ExternalTempFileProvider/__create/struct.Common.html\" title=\"struct index::inverted_index::create::sort::external_provider::__mock_MockExternalTempFileProvider_ExternalTempFileProvider::__create::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/create/sort/external_provider/__mock_MockExternalTempFileProvider_ExternalTempFileProvider/__read_all/struct.Common.html\" title=\"struct index::inverted_index::create::sort::external_provider::__mock_MockExternalTempFileProvider_ExternalTempFileProvider::__read_all::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/format/reader/__mock_MockInvertedIndexReader_InvertedIndexReader/__bitmap/struct.Common.html\" title=\"struct index::inverted_index::format::reader::__mock_MockInvertedIndexReader_InvertedIndexReader::__bitmap::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/format/reader/__mock_MockInvertedIndexReader_InvertedIndexReader/__fst/struct.Common.html\" title=\"struct index::inverted_index::format::reader::__mock_MockInvertedIndexReader_InvertedIndexReader::__fst::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/format/reader/__mock_MockInvertedIndexReader_InvertedIndexReader/__metadata/struct.Common.html\" title=\"struct index::inverted_index::format::reader::__mock_MockInvertedIndexReader_InvertedIndexReader::__metadata::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/format/writer/__mock_MockInvertedIndexWriter_InvertedIndexWriter/__add_index/struct.Common.html\" title=\"struct index::inverted_index::format::writer::__mock_MockInvertedIndexWriter_InvertedIndexWriter::__add_index::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/format/writer/__mock_MockInvertedIndexWriter_InvertedIndexWriter/__finish/struct.Common.html\" title=\"struct index::inverted_index::format::writer::__mock_MockInvertedIndexWriter_InvertedIndexWriter::__finish::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/search/fst_apply/__mock_MockFstApplier_FstApplier/__apply/struct.Common.html\" title=\"struct index::inverted_index::search::fst_apply::__mock_MockFstApplier_FstApplier::__apply::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/search/fst_apply/__mock_MockFstApplier_FstApplier/__memory_usage/struct.Common.html\" title=\"struct index::inverted_index::search::fst_apply::__mock_MockFstApplier_FstApplier::__memory_usage::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/search/index_apply/__mock_MockIndexApplier_IndexApplier/__apply/struct.Common.html\" title=\"struct index::inverted_index::search::index_apply::__mock_MockIndexApplier_IndexApplier::__apply::Common\">Common</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"index/inverted_index/search/index_apply/__mock_MockIndexApplier_IndexApplier/__memory_usage/struct.Common.html\" title=\"struct index::inverted_index::search::index_apply::__mock_MockIndexApplier_IndexApplier::__memory_usage::Common\">Common</a>"]],
"meta_srv":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"meta_srv/handler/failure_handler/runner/struct.FailureDetectRunner.html\" title=\"struct meta_srv::handler::failure_handler::runner::FailureDetectRunner\">FailureDetectRunner</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"meta_srv/lock/struct.DistLockGuard.html\" title=\"struct meta_srv::lock::DistLockGuard\">DistLockGuard</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"meta_srv/procedure/region_failover/struct.FailoverProcedureGuard.html\" title=\"struct meta_srv::procedure::region_failover::FailoverProcedureGuard\">FailoverProcedureGuard</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"meta_srv/procedure/region_migration/manager/struct.RegionMigrationProcedureGuard.html\" title=\"struct meta_srv::procedure::region_migration::manager::RegionMigrationProcedureGuard\">RegionMigrationProcedureGuard</a>"]],
"mito2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/compaction/struct.CompactionScheduler.html\" title=\"struct mito2::compaction::CompactionScheduler\">CompactionScheduler</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/compaction/task/struct.CompactionTaskImpl.html\" title=\"struct mito2::compaction::task::CompactionTaskImpl\">CompactionTaskImpl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/flush/struct.FlushScheduler.html\" title=\"struct mito2::flush::FlushScheduler\">FlushScheduler</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/data/struct.DataBufferReader.html\" title=\"struct mito2::memtable::partition_tree::data::DataBufferReader\">DataBufferReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/data/struct.DataPartReader.html\" title=\"struct mito2::memtable::partition_tree::data::DataPartReader\">DataPartReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/data/struct.DataPartsReader.html\" title=\"struct mito2::memtable::partition_tree::data::DataPartsReader\">DataPartsReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/dict/struct.DictBlock.html\" title=\"struct mito2::memtable::partition_tree::dict::DictBlock\">DictBlock</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/dict/struct.KeyDict.html\" title=\"struct mito2::memtable::partition_tree::dict::KeyDict\">KeyDict</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/dict/struct.KeyDictBuilder.html\" title=\"struct mito2::memtable::partition_tree::dict::KeyDictBuilder\">KeyDictBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/partition/struct.ReadPartitionContext.html\" title=\"struct mito2::memtable::partition_tree::partition::ReadPartitionContext\">ReadPartitionContext</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/shard/struct.ShardReader.html\" title=\"struct mito2::memtable::partition_tree::shard::ShardReader\">ShardReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/shard_builder/struct.ShardBuilderReader.html\" title=\"struct mito2::memtable::partition_tree::shard_builder::ShardBuilderReader\">ShardBuilderReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/partition_tree/tree/struct.TreeIter.html\" title=\"struct mito2::memtable::partition_tree::tree::TreeIter\">TreeIter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/struct.AllocTracker.html\" title=\"struct mito2::memtable::AllocTracker\">AllocTracker</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/memtable/time_series/struct.Iter.html\" title=\"struct mito2::memtable::time_series::Iter\">Iter</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/read/merge/struct.MergeReader.html\" title=\"struct mito2::read::merge::MergeReader\">MergeReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/region_write_ctx/struct.WriteNotify.html\" title=\"struct mito2::region_write_ctx::WriteNotify\">WriteNotify</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/schedule/scheduler/struct.LocalScheduler.html\" title=\"struct mito2::schedule::scheduler::LocalScheduler\">LocalScheduler</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/file/struct.FileHandleInner.html\" title=\"struct mito2::sst::file::FileHandleInner\">FileHandleInner</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/index/applier/struct.SstIndexApplier.html\" title=\"struct mito2::sst::index::applier::SstIndexApplier\">SstIndexApplier</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/index/creator/statistics/struct.Statistics.html\" title=\"struct mito2::sst::index::creator::statistics::Statistics\">Statistics</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/index/creator/statistics/struct.TimerGuard.html\" title=\"struct mito2::sst::index::creator::statistics::TimerGuard\">TimerGuard</a>&lt;'_&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/parquet/reader/struct.ParquetReader.html\" title=\"struct mito2::sst::parquet::reader::ParquetReader\">ParquetReader</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/worker/struct.RegionWorker.html\" title=\"struct mito2::worker::RegionWorker\">RegionWorker</a>"],["impl&lt;'a&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"mito2/sst/index/store/struct.CounterGuard.html\" title=\"struct mito2::sst::index::store::CounterGuard\">CounterGuard</a>&lt;'a&gt;"]],
"object_store":[["impl&lt;R&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"object_store/layers/prometheus/struct.PrometheusMetricWrapper.html\" title=\"struct object_store::layers::prometheus::PrometheusMetricWrapper\">PrometheusMetricWrapper</a>&lt;R&gt;"]],
"servers":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"servers/grpc/flight/stream/struct.FlightRecordBatchStream.html\" title=\"struct servers::grpc::flight::stream::FlightRecordBatchStream\">FlightRecordBatchStream</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"servers/grpc/greptime_handler/struct.RequestTimer.html\" title=\"struct servers::grpc::greptime_handler::RequestTimer\">RequestTimer</a>"]],
"sqlness_runner":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"sqlness_runner/env/struct.GreptimeDB.html\" title=\"struct sqlness_runner::env::GreptimeDB\">GreptimeDB</a>"]],
"table":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/ops/drop/trait.Drop.html\" title=\"trait core::ops::drop::Drop\">Drop</a> for <a class=\"struct\" href=\"table/table/metrics/struct.MemoryUsageMetrics.html\" title=\"struct table::table::metrics::MemoryUsageMetrics\">MemoryUsageMetrics</a>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()