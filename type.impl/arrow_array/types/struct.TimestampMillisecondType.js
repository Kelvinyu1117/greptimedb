(function() {var type_impls = {
"promql":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowPrimitiveType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowPrimitiveType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowPrimitiveType for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Native</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a></h4></section></summary><div class='docblock'>Corresponding Rust native type for the primitive type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DATA_TYPE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.DATA_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">DATA_TYPE</a>: DataType = _</h4></section></summary><div class='docblock'>the corresponding Arrow data type of this primitive type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_byte_width\" class=\"method trait-impl\"><a href=\"#method.get_byte_width\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_byte_width</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the byte width of this primitive type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_value\" class=\"method trait-impl\"><a href=\"#method.default_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_value</a>() -&gt; Self::Native</h4></section></summary><div class='docblock'>Returns a default value of this primitive type. <a>Read more</a></div></details></div></details>","ArrowPrimitiveType","promql::extension_plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowTimestampType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowTimestampType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowTimestampType for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.UNIT\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.UNIT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">UNIT</a>: TimeUnit = TimeUnit::Millisecond</h4></section></summary><div class='docblock'>The [<code>TimeUnit</code>] of this timestamp.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.make_value\" class=\"method trait-impl\"><a href=\"#method.make_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">make_value</a>(naive: <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;</h4></section></summary><div class='docblock'>Creates a ArrowTimestampType::Native from the provided <a href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\"><code>NaiveDateTime</code></a> <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_time_unit\" class=\"method trait-impl\"><a href=\"#method.get_time_unit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_time_unit</a>() -&gt; TimeUnit</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use Self::UNIT</span></div></span><div class='docblock'>Returns the <code>TimeUnit</code> of this timestamp.</div></details></div></details>","ArrowTimestampType","promql::extension_plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-Debug-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","promql::extension_plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parser-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-Parser-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Parser for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse</a>(string: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;</h4></section><section id=\"method.parse_formatted\" class=\"method trait-impl\"><a href=\"#method.parse_formatted\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse_formatted</a>(string: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, _format: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::Native&gt;</h4></section></div></details>","Parser","promql::extension_plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ScalarType&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.scalar\" class=\"method trait-impl\"><a href=\"#method.scalar\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">scalar</a>(r: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;) -&gt; ScalarValue</h4></section></summary><div class='docblock'>returns a scalar from an optional T</div></details></div></details>","ScalarType<i64>","promql::extension_plan::Millisecond"],["<section id=\"impl-ArrowTemporalType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowTemporalType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowTemporalType for TimestampMillisecondType</h3></section>","ArrowTemporalType","promql::extension_plan::Millisecond"]],
"query":[["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowPrimitiveType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowPrimitiveType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowPrimitiveType for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedtype.Native\" class=\"associatedtype trait-impl\"><a href=\"#associatedtype.Native\" class=\"anchor\">§</a><h4 class=\"code-header\">type <a class=\"associatedtype\">Native</a> = <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a></h4></section></summary><div class='docblock'>Corresponding Rust native type for the primitive type.</div></details><details class=\"toggle\" open><summary><section id=\"associatedconstant.DATA_TYPE\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.DATA_TYPE\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">DATA_TYPE</a>: DataType = _</h4></section></summary><div class='docblock'>the corresponding Arrow data type of this primitive type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_byte_width\" class=\"method trait-impl\"><a href=\"#method.get_byte_width\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_byte_width</a>() -&gt; <a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.usize.html\">usize</a></h4></section></summary><div class='docblock'>Returns the byte width of this primitive type.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.default_value\" class=\"method trait-impl\"><a href=\"#method.default_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">default_value</a>() -&gt; Self::Native</h4></section></summary><div class='docblock'>Returns a default value of this primitive type. <a>Read more</a></div></details></div></details>","ArrowPrimitiveType","query::range_select::plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ArrowTimestampType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowTimestampType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowTimestampType for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle\" open><summary><section id=\"associatedconstant.UNIT\" class=\"associatedconstant trait-impl\"><a href=\"#associatedconstant.UNIT\" class=\"anchor\">§</a><h4 class=\"code-header\">const <a class=\"constant\">UNIT</a>: TimeUnit = TimeUnit::Millisecond</h4></section></summary><div class='docblock'>The [<code>TimeUnit</code>] of this timestamp.</div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.make_value\" class=\"method trait-impl\"><a href=\"#method.make_value\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">make_value</a>(naive: <a class=\"struct\" href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\">NaiveDateTime</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;</h4></section></summary><div class='docblock'>Creates a ArrowTimestampType::Native from the provided <a href=\"https://docs.rs/chrono/latest/chrono/naive/datetime/struct.NaiveDateTime.html\" title=\"struct chrono::naive::datetime::NaiveDateTime\"><code>NaiveDateTime</code></a> <a>Read more</a></div></details><details class=\"toggle method-toggle\" open><summary><section id=\"method.get_time_unit\" class=\"method trait-impl\"><a href=\"#method.get_time_unit\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">get_time_unit</a>() -&gt; TimeUnit</h4></section></summary><span class=\"item-info\"><div class=\"stab deprecated\"><span class=\"emoji\">👎</span><span>Deprecated: Use Self::UNIT</span></div></span><div class='docblock'>Returns the <code>TimeUnit</code> of this timestamp.</div></details></div></details>","ArrowTimestampType","query::range_select::plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Debug-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-Debug-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html\" title=\"trait core::fmt::Debug\">Debug</a> for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.fmt\" class=\"method trait-impl\"><a href=\"#method.fmt\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\" class=\"fn\">fmt</a>(&amp;self, f: &amp;mut <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Formatter.html\" title=\"struct core::fmt::Formatter\">Formatter</a>&lt;'_&gt;) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/result/enum.Result.html\" title=\"enum core::result::Result\">Result</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.unit.html\">()</a>, <a class=\"struct\" href=\"https://doc.rust-lang.org/nightly/core/fmt/struct.Error.html\" title=\"struct core::fmt::Error\">Error</a>&gt;</h4></section></summary><div class='docblock'>Formats the value using the given formatter. <a href=\"https://doc.rust-lang.org/nightly/core/fmt/trait.Debug.html#tymethod.fmt\">Read more</a></div></details></div></details>","Debug","query::range_select::plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-Parser-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-Parser-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl Parser for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><section id=\"method.parse\" class=\"method trait-impl\"><a href=\"#method.parse\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse</a>(string: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;</h4></section><section id=\"method.parse_formatted\" class=\"method trait-impl\"><a href=\"#method.parse_formatted\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">parse_formatted</a>(string: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>, _format: &amp;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.str.html\">str</a>) -&gt; <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;Self::Native&gt;</h4></section></div></details>","Parser","query::range_select::plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ScalarType&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.scalar\" class=\"method trait-impl\"><a href=\"#method.scalar\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">scalar</a>(r: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;) -&gt; ScalarValue</h4></section></summary><div class='docblock'>returns a scalar from an optional T</div></details></div></details>","ScalarType<i64>","query::range_select::plan::Millisecond"],["<details class=\"toggle implementors-toggle\" open><summary><section id=\"impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ScalarType%3Ci64%3E-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ScalarType&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt; for TimestampMillisecondType</h3></section></summary><div class=\"impl-items\"><details class=\"toggle method-toggle\" open><summary><section id=\"method.scalar\" class=\"method trait-impl\"><a href=\"#method.scalar\" class=\"anchor\">§</a><h4 class=\"code-header\">fn <a class=\"fn\">scalar</a>(r: <a class=\"enum\" href=\"https://doc.rust-lang.org/nightly/core/option/enum.Option.html\" title=\"enum core::option::Option\">Option</a>&lt;<a class=\"primitive\" href=\"https://doc.rust-lang.org/nightly/std/primitive.i64.html\">i64</a>&gt;) -&gt; ScalarValue</h4></section></summary><div class='docblock'>returns a scalar from an optional T</div></details></div></details>","ScalarType<i64>","query::range_select::plan::Millisecond"],["<section id=\"impl-ArrowTemporalType-for-TimestampMillisecondType\" class=\"impl\"><a href=\"#impl-ArrowTemporalType-for-TimestampMillisecondType\" class=\"anchor\">§</a><h3 class=\"code-header\">impl ArrowTemporalType for TimestampMillisecondType</h3></section>","ArrowTemporalType","query::range_select::plan::Millisecond"]]
};if (window.register_type_impls) {window.register_type_impls(type_impls);} else {window.pending_type_impls = type_impls;}})()