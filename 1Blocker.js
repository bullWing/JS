var str = {
  "body" : {"request_date_ms":1671806803146,"request_date":"2022-12-23T14:46:43Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-12-23T14:46:43Z","original_application_version":"900","other_purchases":{},"management_url":"itms-apps:\/\/apps.apple.com\/account\/subscriptions","subscriptions":{"blocker.ios.subscription.yearly":{"is_sandbox":false,"period_type":"premium","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2999-12-28T11:13:20Z","grace_period_expires_date":null,"original_purchase_date":"2022-12-23T14:46:43Z","purchase_date":"2022-12-23T14:46:43Z","store":"app_store"}},"entitlements":{"premium":{"grace_period_expires_date":null,"purchase_date":"2022-12-23T14:46:43Z","product_identifier":"blocker.ios.subscription.yearly","expires_date":"2999-12-28T11:13:20Z"}},"original_purchase_date":"2022-12-23T14:46:43Z","original_app_user_id":"7326E609-FF69-4A99-9B40-EF023E65AA84","last_seen":"2022-12-23T14:46:43Z"}}
}
body = JSON.stringify(str);
$done({body});
