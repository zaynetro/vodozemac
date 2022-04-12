(function() {var implementors = {};
implementors["vodozemac"] = [{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/struct.Curve25519PublicKey.html\" title=\"struct vodozemac::Curve25519PublicKey\">Curve25519PublicKey</a>","synthetic":false,"types":["vodozemac::types::curve25519::Curve25519PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/struct.Ed25519Keypair.html\" title=\"struct vodozemac::Ed25519Keypair\">Ed25519Keypair</a>","synthetic":false,"types":["vodozemac::types::ed25519::Ed25519Keypair"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/struct.Ed25519SecretKey.html\" title=\"struct vodozemac::Ed25519SecretKey\">Ed25519SecretKey</a>","synthetic":false,"types":["vodozemac::types::ed25519::Ed25519SecretKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/struct.Ed25519PublicKey.html\" title=\"struct vodozemac::Ed25519PublicKey\">Ed25519PublicKey</a>","synthetic":false,"types":["vodozemac::types::ed25519::Ed25519PublicKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/struct.KeyId.html\" title=\"struct vodozemac::KeyId\">KeyId</a>","synthetic":false,"types":["vodozemac::types::KeyId"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/megolm/struct.GroupSessionPickle.html\" title=\"struct vodozemac::megolm::GroupSessionPickle\">GroupSessionPickle</a>","synthetic":false,"types":["vodozemac::megolm::group_session::GroupSessionPickle"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/megolm/struct.InboundGroupSessionPickle.html\" title=\"struct vodozemac::megolm::InboundGroupSessionPickle\">InboundGroupSessionPickle</a>","synthetic":false,"types":["vodozemac::megolm::inbound_group_session::InboundGroupSessionPickle"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/megolm/struct.MegolmMessage.html\" title=\"struct vodozemac::megolm::MegolmMessage\">MegolmMessage</a>","synthetic":false,"types":["vodozemac::megolm::message::MegolmMessage"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/megolm/struct.SessionKey.html\" title=\"struct vodozemac::megolm::SessionKey\">SessionKey</a>","synthetic":false,"types":["vodozemac::megolm::session_keys::SessionKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/megolm/struct.ExportedSessionKey.html\" title=\"struct vodozemac::megolm::ExportedSessionKey\">ExportedSessionKey</a>","synthetic":false,"types":["vodozemac::megolm::session_keys::ExportedSessionKey"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.IdentityKeys.html\" title=\"struct vodozemac::olm::IdentityKeys\">IdentityKeys</a>","synthetic":false,"types":["vodozemac::olm::account::IdentityKeys"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.AccountPickle.html\" title=\"struct vodozemac::olm::AccountPickle\">AccountPickle</a>","synthetic":false,"types":["vodozemac::olm::account::AccountPickle"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.Message.html\" title=\"struct vodozemac::olm::Message\">Message</a>","synthetic":false,"types":["vodozemac::olm::messages::message::Message"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.PreKeyMessage.html\" title=\"struct vodozemac::olm::PreKeyMessage\">PreKeyMessage</a>","synthetic":false,"types":["vodozemac::olm::messages::pre_key::PreKeyMessage"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"enum\" href=\"vodozemac/olm/enum.OlmMessage.html\" title=\"enum vodozemac::olm::OlmMessage\">OlmMessage</a>","synthetic":false,"types":["vodozemac::olm::messages::OlmMessage"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.SessionPickle.html\" title=\"struct vodozemac::olm::SessionPickle\">SessionPickle</a>","synthetic":false,"types":["vodozemac::olm::session::SessionPickle"]},{"text":"impl <a class=\"trait\" href=\"https://docs.rs/serde/1.0.136/serde/ser/trait.Serialize.html\" title=\"trait serde::ser::Serialize\">Serialize</a> for <a class=\"struct\" href=\"vodozemac/olm/struct.SessionKeys.html\" title=\"struct vodozemac::olm::SessionKeys\">SessionKeys</a>","synthetic":false,"types":["vodozemac::olm::session_keys::SessionKeys"]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()