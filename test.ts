{
  type: "literal_value",
  cases: [
    { tokens: [ { type: "literal_string" } ] },
    { tokens: [ { type: "literal_integer" } ] },
    { tokens: [ { type: "literal_float" } ] },
    { tokens: [ { type: "literal_bool" } ] },
  ],
}

{
  type: "literal_value",
  cases: [
    { tokens: [ { type: "keyword_const" }, { type: "identifier" }, { type: "symbol_colon" }, ] },
  ],
}