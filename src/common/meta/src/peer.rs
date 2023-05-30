// Copyright 2023 Greptime Team
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

use api::v1::meta::Peer as PbPeer;
use serde::{Deserialize, Serialize};

#[derive(Debug, Clone, Hash, Eq, PartialEq, Deserialize, Serialize)]
pub struct Peer {
    pub id: u64,
    pub addr: String,
}

impl From<PbPeer> for Peer {
    fn from(p: PbPeer) -> Self {
        Self {
            id: p.id,
            addr: p.addr,
        }
    }
}

impl From<Peer> for PbPeer {
    fn from(p: Peer) -> Self {
        Self {
            id: p.id,
            addr: p.addr,
        }
    }
}

impl Peer {
    pub fn new(id: u64, addr: impl Into<String>) -> Self {
        Self {
            id,
            addr: addr.into(),
        }
    }
}