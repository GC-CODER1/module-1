import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { ArrowLeft, MapPin, Clock, User } from 'lucide-react-native';

export default function MissionDetailScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams();

  // Mock mission data - in real app this would come from API
  const mission = {
    id: '1',
    title: 'Food for 4',
    pickupLocation: '123 Main Street, Anytown',
    deliveryLocation: '456 Oak Avenue, Anytown',
    pickupTime: '2:00 PM',
    deliveryTime: '3:00 PM',
    pickupContact: 'Sarah Miller',
    deliveryContact: 'David Chen',
    type: 'food',
    priority: 'high',
    description: 'Family of 4 including 2 children needs immediate food assistance.',
  };

  const handleAcceptMission = () => {
    // Simulate accepting mission
    setTimeout(() => {
      router.back();
    }, 1000);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Mission Details</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Pickup</Text>
          
          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <MapPin size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Pickup Location</Text>
                <Text style={styles.detailValue}>{mission.pickupLocation}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <User size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Contact</Text>
                <Text style={styles.detailValue}>{mission.pickupContact}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Clock size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Time</Text>
                <Text style={styles.detailValue}>{mission.pickupTime}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Delivery</Text>
          
          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <MapPin size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Delivery Location</Text>
                <Text style={styles.detailValue}>{mission.deliveryLocation}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <User size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Contact</Text>
                <Text style={styles.detailValue}>{mission.deliveryContact}</Text>
              </View>
            </View>
          </View>

          <View style={styles.detailCard}>
            <View style={styles.detailRow}>
              <View style={styles.iconContainer}>
                <Clock size={20} color="#4A90E2" />
              </View>
              <View style={styles.detailContent}>
                <Text style={styles.detailLabel}>Time</Text>
                <Text style={styles.detailValue}>{mission.deliveryTime}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Route</Text>
          <View style={styles.mapContainer}>
            <Image
              source={{ uri: 'https://images.pexels.com/photos/335321/pexels-photo-335321.jpeg?auto=compress&cs=tinysrgb&w=600&h=300&fit=crop' }}
              style={styles.mapImage}
            />
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.acceptButton} onPress={handleAcceptMission}>
          <Text style={styles.acceptButtonText}>Accept Mission</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5E5',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#1A1A1A',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontFamily: 'Inter-SemiBold',
    color: '#1A1A1A',
    marginBottom: 16,
  },
  detailCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
    elevation: 2,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#F0F7FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  detailContent: {
    flex: 1,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: 'Inter-Medium',
    color: '#666',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#1A1A1A',
  },
  mapContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 24,
  },
  mapImage: {
    width: '100%',
    height: 200,
  },
  footer: {
    padding: 24,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
  },
  acceptButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  acceptButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Inter-SemiBold',
  },
});