actor {
  var achievementPower = 0;
  public shared ({ caller }) func incrementAchievementPower() : async () {
    achievementPower += 1;
  };
  public query ({ caller }) func getAchievementPower() : async Nat {
    achievementPower;
  };
};
