// You need to implement the KeyValuePair interface that describes a key-value pair.
// Use generics so that this interface can work with any types of keys and values.

interface KeyValuePair<K, V> {
  key: K;
  value: V;
}

const pair: KeyValuePair<string, number> = { key: "age", value: 21 };

export {};
