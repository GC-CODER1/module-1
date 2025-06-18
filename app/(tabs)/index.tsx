import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useRouter } from 'expo-router';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { MapPin, Package, ArrowRight, Heart } from 'lucide-react-native';

export default function HomeScreen() {
  const router = useRouter();
  const reportScale = useSharedValue(1);
  const donateScale = useSharedValue(1);

  const reportAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: reportScale.value }],
  }));

  const donateAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: donateScale.value }],
  }));

  const handleReportPress = () => {
    reportScale.value = withSpring(0.95, {}, () => {
      reportScale.value = withSpring(1);
    });
    router.push('/report');
  };

  const handleDonatePress = () => {
    donateScale.value = withSpring(0.95, {}, () => {
      donateScale.value = withSpring(1);
    });
    router.push('/donate');
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View style={styles.welcomeContainer}>
            <Heart size={32} color="#4A90E2" fill="#4A90E2" strokeWidth={0} />
            <Text style={styles.welcomeTitle}>Make a Difference</Text>
            <Text style={styles.welcomeSubtitle}>
              Help your community by reporting needs or sharing resources
            </Text>
          </View>
        </View>

        <View style={styles.actionsContainer}>
          <Animated.View style={reportAnimatedStyle}>
            <TouchableOpacity style={styles.actionCard} onPress={handleReportPress}>
              <View style={styles.actionIconContainer}>
                <MapPin size={32} color="#FFFFFF" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Report a Need</Text>
                <Text style={styles.actionDescription}>
                  Help someone in your community by reporting their location and needs
                </Text>
              </View>
              <ArrowRight size={24} color="#666" />
            </TouchableOpacity>
          </Animated.View>

          <Animated.View style={donateAnimatedStyle}>
            <TouchableOpacity style={styles.actionCard} onPress={handleDonatePress}>
              <View style={[styles.actionIconContainer, styles.donateIcon]}>
                <Package size={32} color="#FFFFFF" />
              </View>
              <View style={styles.actionContent}>
                <Text style={styles.actionTitle}>Make a Donation</Text>
                <Text style={styles.actionDescription}>
                  Share your surplus food or resources with those who need them
                </Text>
              </View>
              <ArrowRight size={24} color="#666" />
            </TouchableOpacity>
          </Animated.View>
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>247</Text>
            <Text style={styles.statLabel}>People Helped</Text>
          </View>
          <View style={styles.statCard}>
            <Text style={styles.statNumber}>89</Text>
            <Text style={styles.statLabel}>Active Volunteers</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 32,
  },
  welcomeContainer: {
    alignItems: 'center',
  },
  welcomeTitle: {
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    color: '#1A1A1A',
    marginTop: 16,
    marginBottom: 8,
  },
  welcomeSubtitle: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
  },
  actionsContainer: {
    paddingHorizontal: 24,
    gap: 16,
  },
  actionCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  actionIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#4A90E2',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  donateIcon: {
    backgroundColor: '#2ECC71',
  },
  actionContent: {
    flex: 1,
  },
  actionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1A1A1A',
    marginBottom: 4,
  },
  actionDescription: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    lineHeight: 20,
  },
  statsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 24,
    paddingTop: 32,
    gap: 16,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  statNumber: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#4A90E2',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Regular',
    color: '#666',
    textAlign: 'center',
  },
});